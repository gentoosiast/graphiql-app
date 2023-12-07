import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const WelcomeTitle = styled('h1')(() => ({
    width: 350,
  }));

  const Member = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));

  const MemberText = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 350,
  }));

  const FirstLine = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: 100,
  }));

  const SecondLine = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: 100,
  }));

  const { setLanguage, translate } = useI18NContext();

  return (
    <>
      <WelcomeTitle>Welcome</WelcomeTitle>
      <p>{translate('greeting')}</p>
      <button onClick={() => setLanguage(I18NLanguage.English)} type="button">
        Switch language to EN
      </button>
      <button onClick={() => setLanguage(I18NLanguage.Russian)} type="button">
        Switch language to RU
      </button>

      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>
      <FirstLine>
        <Member>
          <Avatar alt="Kate" src="src/assets/1.jpeg" sx={{ height: 200, width: 200 }} />
          <MemberText>
            Hello, my name is Kate Goncharick. Since the summer of 2022, I have been self-studying.
            A friend introduced me to Rolling Scopes School. Currently, I am finishing the third
            stage of the course.
          </MemberText>
        </Member>
        <Member className="ira-block">
          <Avatar alt="Ira" src="src/assets/3.jpg" sx={{ height: 200, width: 200 }} />
          <MemberText>
            Hello! My name is Irina. I am a self-motivated programmer with a strong drive to
            succeed. I am passionate about coding and continuously strive to enhance my skills and
            knowledge in the field. I believe in setting high goals for myself and working
            diligently to achieve them.
          </MemberText>
        </Member>
      </FirstLine>

      <SecondLine>
        <Member>
          <Avatar alt="Sergey" src="src/assets/2.jpg" sx={{ height: 200, width: 200 }} />
          <MemberText>
            Digital Native. Люблю игры студии Zachtronics, рассказы Теда Чана, очень острую еду,
            своего огромного огненно-рыжего кота и программирование
          </MemberText>
        </Member>
      </SecondLine>
    </>
  );
};
