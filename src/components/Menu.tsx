export function Menu({open}:{open:string}){
    return (
        <div className={`flex flex-col p-10" ${open}`}>
            <p>Home</p>
            <p>Shorts</p>
            <p>History</p>
            <p>Subscriptions</p>
        </div>
    )

}