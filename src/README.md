// var React = require("react");
// var ReactDOM = require('react-dom');

const name = "yuvraj singh"
//way of rendering
ReactDOM.render(
<>
<h1>my name is yuvraj</h1>
<h1>hello {Math.random()}</h1>
  
</>,//fragment end
document.getElementById("root")
);

// //other way of rendering
// var h1 = document.createElement('h1');
// h1.innerHTML = "yuvraj react project";
// document.getElementById("root").appendChild(h1);


//time and date 
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(<>
  <h1>hello my name is {me}</h1>
 <p>current Date is = {currDate}</p>
 <p>current Time is = {currTime}</p>


 const name = "rajeev";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/230/300";
const img4 = "https://picsum.photos/240/300";
const img3 = "https://picsum.photos/250/300";
const img5 = "https://picsum.photos/270/300";
const link = "https://legacy.reactjs.org/docs/react-dom.html";


//image rendering
ReactDOM.render(
  <>
    <h1 className="heading">hello {name}</h1>
    <div className="img-div">
      <img src={img1} alt="random" />
      <img src={img2} alt="random" />
      <img src={img3} alt="random" />
      <img src={img4} alt="random" />
      <a href={link} target="-react">
        <img src={img5} alt="random" />
        </a>
    </div>
  </>,);


//time js changing
  let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "blue";
}

ReactDOM.render(
  <>
    <div className="head">
      <h1>
        Hello rajeev, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")

  //count function
  const App=()=>{

  const state = useState();
  
  const [count, setCount]=useState(0);
  
  const IncNum = () =>{
    setCount(count +1);
  
  };

return(
  <>
  <h1>{count}</h1>
  <button onClick={IncNum}>click Me</button>

  </>
)
};

//time show
const App = () =>{
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime]= useState(time);

    const updateTime =()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime,1000);

return(
  <>
    <div className="card">
      <h1>{ctime}</h1>
      {/* <button onClick={setCtime}>get time</button> */}
    </div>
  </>
);
}