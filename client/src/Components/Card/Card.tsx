

export function Card({props}:any) {
    console.log(props)
    return (
        <div className='Card'>
            {props.exampleState}
        </div>
    )
}
