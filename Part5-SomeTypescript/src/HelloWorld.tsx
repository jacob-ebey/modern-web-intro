import * as React from 'react'

interface IHelloWorldProps {
  name: string
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render () {
    return <div>Hello {this.props.name}</div>
  }
}