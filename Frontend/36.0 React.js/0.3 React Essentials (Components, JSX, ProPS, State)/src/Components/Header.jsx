const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  // console.log(max);
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  return (
    <>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(reactDescriptions.length)]}{' '}
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
};
