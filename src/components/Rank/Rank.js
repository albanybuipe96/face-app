import React from 'react'

let Rank = ({username, rank}) => <div>
    <div className='white f3'>
        Hey, {username}, your rank is ...
    </div>
    <div className='white f1'>
        #{rank}
    </div>
</div>

export default Rank