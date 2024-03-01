import Button from  "public/plus-button.svg"

function NewsMoreButton () {

  return (
    <button type="button" className="absolute bottom-8 right-8">
      <img src={Button} alt="소식 페이지로 이동" />
    </button>
  )
}

export default NewsMoreButton