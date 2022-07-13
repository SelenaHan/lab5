import React from 'react';  
import './myStyle.css';    
import axios from 'axios';  
    
export default class GetData extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`https://jsonplaceholder.typicode.com/photos`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>  
        
    <h1>List of albums</h1>
        <table>  
            <thead>  
        <tr className='title'><th>ID</th><th>Title</th><th>Thumbnail</th><th>Delete</th></tr>
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.id}</td>  
                  <td>{post.title}</td>  
                  <td><img src={post.thumbnailUrl} alt={post.id} /></td>  
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
