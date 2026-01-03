export const withBorder = <T,>(Component: React.FC<T>) => {
  const WrappedComponent: React.FC<T> = (props) => (
    <div
      style={{
        border: '2px solid #0070f3',
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
      }}
    >
      <Component {...props} />
    </div>
  );

  WrappedComponent.displayName = `withBorder(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};
