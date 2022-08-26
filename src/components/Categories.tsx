import { CategoriesContext } from '../models/context';

export default function Categories({
  activeValue,
  onClickCategory,
}: CategoriesContext) {
  const categoryTitles: string[] = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categoryTitles.map((category, i) => (
          <li
            key={category}
            onClick={() => onClickCategory(i)}
            className={activeValue === i ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
