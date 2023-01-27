const Story = ({ setDpStory }) => {
  return (
    <div className="spread-over-all">
      <div id="story-container">
        <h1>story</h1>
        <button
          onClick={() => {
            setDpStory(false);
          }}
        >
          XXX
        </button>
      </div>
    </div>
  );
};

export default Story;
