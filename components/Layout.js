import Link from 'next/link';
import {blue} from '../lib/styles';
import Head from 'next/head';
import Router from 'next/router';
const Layout = props => {
    return (
        <div>
            <Head>
                <title>{props.title || ''}</title>{' '}
                <link rel="shortcut icon" type="image/x-icon" href="/static/logo.png" />
            </Head>
            <div className="container">
                <nav>
                    <Link href="/">
                        <a>
                            <img src="/static/logo.png" width="50px" />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <span className="main-title">Hacker News</span>
                        </a>
                    </Link>
                </nav>

                <div className="content">
                    <div>{props.children}</div>
                </div>
            </div>
            <style jsx>{`
                nav {
                    width: 100%;
                    background: ${blue()};
                    color: #fff;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    box-shadow: -3px 2px 10px rgba(000, 000, 000, 0.2);
                    padding: 5px 25px;
                    position: fixed;
                    top: 0;
                }
                nav a {
                    color: #fff;
                }
                .main-title {
                    font-size: 30px;
                }
                .content {
                    margin: 100px auto;
                    max-width: 900px;
                    padding: 15px;
                    display: block;
                }
            `}</style>
        </div>
    );
};
export default Layout;
