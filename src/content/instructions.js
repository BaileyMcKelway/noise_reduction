export const instructionContent = [
  {
    num: <h1>1</h1>,
    title: 'Load File',
    content: (
      <div className="step_mod_text">
        Load the file by clicking or dropping into the{' '}
        <span className="blue">blue</span> rectangle above. Or click “Try
        Example” to load the app with an example file.
      </div>
    ),
  },
  {
    num: <h1>2</h1>,
    title: 'Learn Noise',
    content: (
      <div className="step_mod_text">
        After loading the file should appear in the editor with a{' '}
        <span className="red">red</span> region highlighting part of the track.
        Go ahead and highlight the background noise you want to remove by
        clicking and dragging over the unwanted section and then clicking
        “Learn”.
      </div>
    ),
  },
  {
    num: <h1 className="outline">3</h1>,
    title: 'Set Noise Floor',
    content: (
      <div className="step_mod_text">
        After Learning the noise, the graph should display a dashed line and a
        <span className="green"> green</span> line. By dragging the slider on
        the left you can set the noise floor. The noise floor tells the
        algorithm how loud the noise is. The graph line will change from{' '}
        <span className="green">green</span> to <span className="red">red</span>{' '}
        if the level is too high.
      </div>
    ),
  },
  {
    num: <h1>4</h1>,
    title: 'Set Noise Reduction',
    content: (
      <div className="step_mod_text">
        The slider on the right controls the noise reduction. The higher the
        slider is dragged the more reduction is applied. It is best to set this
        level high.
      </div>
    ),
  },
  {
    num: <h1>5</h1>,
    title: 'Generate',
    content: (
      <div className="step_mod_text">
        Now it’s time to create the new file with the applied noise reduction!
        Click generate and your file will start to process. The length of time
        this takes depends on the size of the file. Once finished the processed
        file will appear below the generate button where you can download it.
      </div>
    ),
  },
];
