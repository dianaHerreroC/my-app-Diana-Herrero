import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function ScrollWrapper({ children }) {
  return (
    <div className="custom-scroll-wrapper">
        <SimpleBar style={{ maxHeight: '100%' }}>
        {children}
        </SimpleBar>
    </div>
  );
}
