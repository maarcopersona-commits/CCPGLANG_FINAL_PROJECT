
import { useState } from 'react';
import SidePanel from './components/SidePanel';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import Overview from './overview';
import Reports from './reports';
import ClassDetails from './classDetails';
import ToastContainer from './components/ui/toast';

const classTitleMap: Record<
  string,
  { title: string; code: string; fullCode: string }
> = {
  CCPGLANG: {
    title: 'Programming Languages',
    code: 'CCPGLANG',
    fullCode: 'CCPGLANG - COM232',
  },
  CCINTHCI: {
    title: 'Human Computer Interaction',
    code: 'CCINTHCI',
    fullCode: 'CCINTHCI - COM242',
  },
  CCAUTOMATA: {
    title: 'Automata Theory',
    code: 'CCAUTOMATA',
    fullCode: 'CCAUTOMA - COM222',
  },
  CCAUTOMA: {
    title: 'Automata Theory',
    code: 'CCAUTOMATA',
    fullCode: 'CCAUTOMA - COM222',
  },
  CCDATRCL: {
    title: 'Data Structure',
    code: 'CCDATRCL',
    fullCode: 'CCDATRCL - COM242',
  },
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activePage, setActivePage] = useState('Overview');

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setShowLogin(false);
    setActivePage('Overview');
  };

  const renderContent = () => {
    // Show the landing page first
    if (!showLogin && !isLoggedIn) {
      return (
        <LandingPage
          onLogin={() => setShowLogin(true)}
        />
      );
    }

    // Show the login page
    if (!isLoggedIn) {
      return (
        <div className="flex min-h-screen w-screen flex-col md:flex-row">
          <SidePanel />

          <LoginForm
            onSignIn={() => {
              setIsLoggedIn(true);
              setShowLogin(false);
            }}
            onBack={() => setShowLogin(false)}
          />
        </div>
      );
    }

    // Show Reports
    if (activePage === 'Reports') {
      return (
        <Reports
          onSignOut={handleSignOut}
          onPageChange={(page) => setActivePage(page)}
        />
      );
    }

    // Show selected class details
    if (classTitleMap[activePage] || activePage.startsWith('CC')) {
      const currentClass = classTitleMap[activePage] || {
        title: activePage,
        code: activePage,
        fullCode: `${activePage} - COM232`,
      };

      return (
        <ClassDetails
          onSignOut={handleSignOut}
          onPageChange={(page) => setActivePage(page)}
          classCode={currentClass.code}
          classNameTitle={currentClass.title}
          fullCode={currentClass.fullCode}
        />
      );
    }

    // Default dashboard: Overview
    return (
      <Overview
        onSignOut={handleSignOut}
        onPageChange={(page) => setActivePage(page)}
      />
    );
  };

  return (
    <>
      {renderContent()}
      <ToastContainer />
    </>
  );
}

export default App;