import { Stack } from "@mui/material";
import { categories } from '../utils/constants';


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack direction="row" sx={{
        overflowY:"auto",
        height:{sx:'auto' , md:'95%'},
        flexDirection: { md:'column'}
    }}>
        {categories.map((cate)=>(
            <button className="category-btn"
            onClick={()=>setSelectedCategory(cate.name)}
            style={
                {
                    background:cate.name===selectedCategory && '#fc1503',
                    color:'white'
                }
            } key={cate.name}>
                <span style={{
                    color:cate.name===selectedCategory ? 'white' : 'red',
                    marginRight:'15px'
                }}>{cate.icon}</span>
                <span style={{
                    opacity:cate.name===selectedCategory ? '1' : '0.8'
                }}>{cate.name}</span>
            </button>
        ))}
    </Stack>
  )


export default Sidebar