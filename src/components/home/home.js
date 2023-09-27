import React, { useEffect, Suspense } from 'react';
const Resume = React.lazy(() => import('./Resume'));
import '../../styles/home.scss';
import { useTheme } from '../../styles/ThemeProvider';


export default function Home({ getCurrentSection }) {
  const { theme } = useTheme();

  const style = {
    // '--home-bg-color': theme.secondary,
  };

  useEffect(() => {
    getCurrentSection();
  }, []);

  return (
    <div
      className="home-container"
      // style={style}
    >
      <h1>Home Page</h1>
      <section id="resume-section">
        <h3>Resume</h3>
        <Suspense fallback={<div>Loading...</div>}>
          < Resume />
        </Suspense>
      </section>
    </div>
  )
}