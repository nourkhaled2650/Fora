interface ITeamDetailsProps {
  name: string;
  img: string;
  goals: number;
  position: boolean;
}

const Team_details = ({ name, img, goals, position }: ITeamDetailsProps) => {
  return (
    <div className=' flex items-center'>
      {position ? '' : <p>{goals}</p>}
      <div className='inline-flex flex-col items-center'>
        <h1>{name}</h1>
        <img src={img} alt='name' className=' mx-10 w-20' />
      </div>
      {position ? <p>{goals}</p> : ''}
    </div>
  );
};

export default Team_details;
