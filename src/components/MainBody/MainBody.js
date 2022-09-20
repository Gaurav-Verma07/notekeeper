import classes from './MainBody.module.scss';
import MainBodyItem from '../MainBodyItem/MainBodyItem';
import { getRandomColor } from '../../utils/random-color';

const list = [
  'a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.',
  'Scroll through the sentence list to see the sentence that best meets the context you’re looking for.',
  "When you've discovered just the right sentence, you can copy it to your clipboard. You can also report a problem or give feedback.",
  'Simply type in the word you want to explore the meaning of and find your screen filled with countless examples of that word in a sentence.',
  'Whether it’s simple sentences for those just learning the English language or phrasing for an academic paper, this easy-to-use sentence generator will help you choose your words with confidence.',
  ' A person, animal, place, thing, or concept that does an action. Determine the subject in a sentence by asking the question “Who or what?”',
];
const color = ['red', 'blue', 'green', 'purple', 'yellow', 'brown', 'magenta', 'pink', 'crimson'];

const MainBody = () => {
  return (
    <section className={classes.main}>
      {list.map((value, index) => (
        <MainBodyItem key={index} color={getRandomColor()} text={value} />
      ))}
    </section>
  );
};
export default MainBody;
