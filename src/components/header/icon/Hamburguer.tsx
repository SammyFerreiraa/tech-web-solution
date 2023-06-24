type Props = {
  width?: string | number
  height?: string | number
  fill?: string
}

const Hamburguer = ({ width = 24, height = 24, fill = '#000000' }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 'inherit', height: 'inherit' }}
        fill={fill}
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
    </div>
  )
}

export default Hamburguer
