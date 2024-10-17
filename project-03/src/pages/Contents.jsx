import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom";

function Contents() {
    const [contents, setContents] = useState([
        {
            id: 1,
            content: '컨텐츠 1 입니다.'
        },
        {
            id: 2,
            content: '배가 고픕니다.'
        },
        {
            id: 3,
            content: '코딩을 잘하고 싶습니다.'
        }
    ]);

    return (
        <div>
            <ul>
                {
                    contents.map((item) => (
                        <li key={item.id}>
                            <NavLink to={`${item.id}?contents=${item.content}`}>컨텐츠 {item.id}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
        
    )
}

export default Contents