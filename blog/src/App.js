import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit= (event) =>{
   event.preventDefault();
   if(toDo===""){
    return;
   }
   setToDos(currentArray=>[toDo,...currentArray])
   setToDo("");
   }
  

  return <div>
    <h1>MY TODOS({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        value={toDo}
        onChange={onChange}
        text="type"
        placeholder="write your to do...." />
      <button>add to do</button>
    </form>
    <hr/>
    <ul>
    {toDos.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
  </div>

}

export default App;







// state가 변하면 모든 코드들이 재실행됨 어떤 코드는 딱 한번만 실행시키고 싶을 때는 useEffect 라는 함수를 사용 useEffect(argument1,argument2)
// argument1은 한번만 실행시키고 싶은 코드이고 argument2는 array인데 여기에 넣어준 값의 state가 변할때마다 argument1에 넣은 코드를 실행시킴
// 컴포넌트가 파괴 될때도 코드를 실행 시킬 수 있다 componentDey컴포넌트가 파괴 될때도 아래와 같이 하면 코드를 실행시킬 수있다
// ex)
// function componentDey(){
//   function destroyedFn(){
//     console.log("destroyed!!")
//   }
//   function createFn(){
//     console.log("created")
//     return destroyedFn
//   }
//   useEffect(createFn,[])
// }
// input에다가 onChange이벤트를 주는 이유는 애가 작동해서 value값을 새로운 value로 게속 업데이트 해주기 때문이다
// 우리는 state를 직접 수정하지 않는다 수정하는 함수를 이용하는거지
// setToDos(currentArray=>[toDo,...currentArray]) === 
// setToDos(function(){
// [toDo,...currentArray] 
// })
// setToDos 함수는 toDos값을 바꿔주는 함수이다 