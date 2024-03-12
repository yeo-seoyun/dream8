import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { RecordModel } from 'pocketbase';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Button from '@/components/01_atoms/Button/Button';

export const MypageSponsorship = () => {
  const loadedData = useLoaderData();
  const { userInfo } = useLoginFormStore();
  const [donationData, setDonationData] = useState<RecordModel[] | undefined>(
    loadedData
  );
  const [showMore, setShowMore] = useState(5);
  const { data: donationList, isError } = useQuery<RecordModel[]>({
    queryKey: ['donation'],
    queryFn: fetchDonationValue,
    initialData: loadedData,
    staleTime: 1000 * 10,
  });

  if (isError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다. Error</div>;
  }

  useEffect(() => {
    const fetchDonationValue = async () => {
      try {
        compareCart(userInfo.id, donationList);
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchDonationValue();
  }, [userInfo, donationList]);

  const compareCart = (userId: string, mydonation?: RecordModel[]) => {
    const result = mydonation?.filter(
      (item) => userId === item.expand?.userId?.id
    );

    setDonationData(result || []); // donationData를 배열로 설정
  };

  const handleShowMore = () => {
    if (showMore < donationList.length) {
      setShowMore(showMore + 3);
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">후원내역</h2>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div>
        <ul>
          <li className="flex flex-col items-center gap-8">
            {donationData?.map((item) => (
              <TransactionListCard
                key={item.id}
                src={[]}
                content={item.description} // donationData 배열을 직접 전달
                isPayed={true}
                className="p-8"
                type={'sponsorship'}
              />
            ))}
          </li>
        </ul>

        {donationData && donationData.length > 0 && (
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={handleShowMore}
              className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary bg-white"
            >
              더보기
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

async function fetchDonationValue(): Promise<RecordModel[]> {
  return await pb.collection('donation').getFullList({ expand: 'userId' });
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['donation'],
    queryFn: () => fetchDonationValue(),
  });
};
