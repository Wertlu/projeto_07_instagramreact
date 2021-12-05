import Story from "./Story";
export default function Stories() {
  const stories = ["9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"]
  return (
    <div class="stories">
      {stories.map(stories => <Story usuario= {stories}/>)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}