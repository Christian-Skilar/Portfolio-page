const NavigationDots = ({ active }) => (
    <div className="app__navigation">
      {['home', 'about', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#2AB0EC' } : {}}
        >.</a>
      ))}
    </div>
  );
  
  export default NavigationDots;