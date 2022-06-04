// 画像のインポート
import CoverImage from '../images/cover-image.png'
import ProfileImage from '../images/profile-image.png'
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  const componentName = () => 'Header';
  return (
    <header className='main-cover' style={{ backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景要素 */}
      <div className='overlay'></div>
      <div className='container'>
        <div className='display-table'>
          <div className='display-table-contents'>
            { /* カバー画像 */}
            <div className='profile-thumb' style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            <h1 className='title-text'>R.YOKOYAMA</h1>
            <h3 className='title-text'>Engineer</h3>
            <ul className='social-icons'>
              <li className='icon-link'>
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className='icon-link'>
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};


