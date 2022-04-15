import React, { Component } from "react";

const User = ({user: { first_name, last_name } }) => (
    <p style={{margin: 20}}>{first_name} {last_name}</p>
)

class Users extends Component {
    state = { user: {}, users: [] };

    componentDidMount() {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => this.setState({ user: json.data }))
            .catch(error => alert(error.message))
    }

    fetchUsers = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(users => users.json())
            .then(json => {
                console.log('Users: ', json.data);
                return this.setState({ users: json.data })
            })
            .catch(error => console.log(error.message))
        
    }

    render() {
        return(
            <section>
                <h2>Active Users</h2>
                <User user={this.state.user} />
                <hr />
                <h3>Want complete users list?</h3>
                <button onClick={this.fetchUsers}>Click Me!</button>
                {
                    this.state.users.map(user => <User key={user.id} user={user} />)
                }
            </section>
        )
    }
}
export default Users;