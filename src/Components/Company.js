export const Company = ({company}) =>{
    const {name, bs, catchPhrase} = company;
    return(
        <div className={'Company'}>
            <h3>Company</h3>
            <p>Name: {name}</p>
            <p>BS: {bs}</p>
            <p>Catch Phrase: {catchPhrase}</p>
        </div>
    )
}