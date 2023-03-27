import { useState } from "react"

interface Props {
    children: string,
    maxChar?: number
}

const ExpandableText = ({children, maxChar=100}: Props) => {
    const [isExpaned, setExpanded] = useState(false)
    
    if (children.length <= maxChar) return <p>{children}</p>
    
    const text = isExpaned? children:children.substring(0, maxChar)
    
    return <p>{text}<button onClick={()=>setExpanded(!isExpaned)}>{isExpaned ? 'Less':'More'}</button></p>
}

export default ExpandableText