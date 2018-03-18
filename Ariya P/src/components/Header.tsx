import * as React from 'react'

import './Header.css'

interface ILink {
  label: string
  target: string
}

interface IHeaderProps {
  label: string
  links?: ILink[]
}

export const Header = ({ label, links }: IHeaderProps) => (
  <div className="Header-container">
    <h1 className="Header-text">{label}</h1>
    <div>
      {
        links && links.length && links.map((link: ILink) => {
          return (
            <a
              key={link.target} 
              className="Header-link"
              href={link.target}
            >
              {link.label}
            </a>
          )
        })
      }
    </div>
  </div>
)