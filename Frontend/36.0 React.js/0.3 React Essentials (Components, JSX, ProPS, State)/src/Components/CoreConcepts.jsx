export const CoreConcepts = ({ image, title, description }) => {
  return (
    <>
      <li>
        <div className="">
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </>
  );
};
