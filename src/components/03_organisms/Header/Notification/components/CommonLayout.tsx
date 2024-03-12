import Image from '@/components/01_atoms/Image/Image';
import closeButton from '/close_noti.svg';
import Button from '@/components/01_atoms/Button/Button';
import { pb } from '@/api/pocketbase';

interface CommponLayoutProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  isComplate: boolean;
}

const CommonLayout = ({
  id,
  src,
  alt,
  title,
  isComplete,
}: CommponLayoutProps) => {
  // const { setNotice, minusNotice } = useNoticeList();

  const handleDelete = async (id: string) => {
    try {
      await pb.collection('notification').delete(id);
      // alert('삭제되었습니다.');
      // minusNotice(id);
    } catch (error) {
      console.log('error ', error);
    }
  };
  return (
    <section className="flex justify-between items-center  w-full relative bg-white p-5 pr-10 rounded-lg">
      <div className="flex flex-col gap-10">
        <h2 className="text-blue-primary text-lg">
          {isComplete ? '판매완료' : ''}
        </h2>
        <span className="text-base"> {title} </span>
      </div>

      <Image src={src} alt={alt} className="" />

      <Button
        type="button"
        onClick={() => {
          handleDelete(id);
        }}
        className="absolute top-0 right-0 mt-2 mr-2"
      >
        <Image src={closeButton} alt={'알림 1개 삭제하기 버튼 '} />
      </Button>
    </section>
  );
};

export default CommonLayout;
