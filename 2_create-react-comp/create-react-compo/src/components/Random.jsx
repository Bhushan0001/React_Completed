function Random(props){
    let color = props.color
    let randomNO = Math.random()*100;
    return <h1 style={{'background-color':color}}>Random number is :{Math.round(randomNO)} </h1>
}
export default Random 