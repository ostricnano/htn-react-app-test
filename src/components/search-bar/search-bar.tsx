import iconSearch from '@/assets/icons/Icon-search.png'
import './styles.css'

interface SearchBarProps {
  placeHolder: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  placeHolder
}) => {
  return (
    <div className='search-bar-container'>
      <input 
        className='search-input'
        type= 'text' 
        placeholder={placeHolder}
      />
      <img className='search-icon' src={iconSearch} />
    </div>
  )
}

export default SearchBar