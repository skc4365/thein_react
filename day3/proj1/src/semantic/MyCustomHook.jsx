import useFetch from "./useFetch";


function MyCustomHook() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <>
        <h3>커스텀훅useFetch.js을 사용. json파일 title을 출력 </h3>
        {data && data.map((item)=>{
            return <p key={item.id}>{item.title}</p>;
        })}
        <hr />
        </>
    );
}

export default MyCustomHook;