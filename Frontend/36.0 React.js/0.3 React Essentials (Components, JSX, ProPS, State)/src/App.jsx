import { useState } from 'react';
import { CoreConcepts } from './Components/CoreConcepts';
import { Header } from './Components/Header';
import { TabButton } from './Components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  const clickHandler = (selectComponents) => {
    setSelectedTopic(selectComponents);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((val) => {
              return (
                <CoreConcepts
                  title={val.title}
                  image={val.image}
                  description={val.description}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => clickHandler('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => clickHandler('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => clickHandler('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => clickHandler('state')}>
              State
            </TabButton>
          </menu>
          {/* ! Using && logical AND operator */}
          {/* {!selectedTopic && <p>Please select a topic</p>} */}

          {/* Using ternary operator */}
          {/* {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </div>
          )} */}

          {/* Using ternary operator */}
          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </div>
          ) : null} */}

          {/* ! Using && logical AND operator */}
          {/* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </div>
          )} */}

          {/* Using JSX*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
