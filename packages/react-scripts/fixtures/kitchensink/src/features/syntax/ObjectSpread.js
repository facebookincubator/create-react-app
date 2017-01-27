import React from 'react'
import fixtureEvent from '../fixture-event'

function load(baseUser) {
  return [
    { id: 1, name: '1', ...baseUser },
    { id: 2, name: '2', ...baseUser },
    { id: 3, name: '3', ...baseUser },
    { id: 4, name: '4', ...baseUser }
  ];
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load({ age: 42 });
    this.setState({ users });
  }

  componentDidUpdate() {
    fixtureEvent(document);
  }

  render() {
    return (
      <div id="feature-object-spread">
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}: {user.age}</div>
        ))}
      </div>
    );
  }
}
