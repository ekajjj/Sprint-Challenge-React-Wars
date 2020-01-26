# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JS library that manipulates the virtual DOM and allows for control over dynamic elements. Great for UI.

2. What does it mean to think in react?

    It's kind of similar to Java itself in breaking down things into individual components and building from that.

3. Describe state.

    State is a data store and is typically used to update components after an effect.

4. Describe props.

    We use props to send data to different components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is something that is out of the scope of the current function. In this particular sprint we synced
    effects by:

    React.useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${page}`)

    const nextPage = () => {
    setPage(page => page + 1)
  }
  const previousPage = () => {
    if (page > 1) {
      setPage(page => page - 1)
    } else {
      alert('Error: on first page')
    }
  }

  where we defined the page to be pulled by axios using buttons from reactstrap