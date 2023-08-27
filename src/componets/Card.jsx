const date = new Date();
const dateName = date.getDate();
const monthNAme = date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
  // eslint-disable-next-line react/prop-types
  const {titleText, DescText} = props;
  return (
    <div className='card'>
    <h3 className='cardTittle'>{titleText}</h3>
    <p className='cardDesc'>{DescText}</p>
    <p className='cardFooter'>{dateName}/{monthNAme}/{currentYear}</p>
    </div>
  )
}
export default Card;