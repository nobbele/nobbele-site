import Head from 'next/head'
import styles from '../styles/Software.module.css'
import Navbar from './_navbar'

function CategoryItem({src, children}) {
  return (
    <div className={styles.categoryItem}>
      <img width="64" height="64" src={src} />
      <p className={styles.categoryItemText}>{children}</p>
    </div>
  )
}

export default function Software() {
  return (
    <>
      <Head>
          <title>Software</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
          <h1>
            Software, Languages, and My Opinions About Them.
          </h1>
          <div className={styles.category}>
            <h2>
              Software
            </h2>
            <div class={`${styles.categoryItemList} ${styles.softwareCategoryItemList}`}>
              <div className={styles.categoryItem}>
                <p className={styles.categoryItemText}>OS (Daily, Sometimes, Phone)</p>
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" />
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" />
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Android_robot_2014.svg" />
              </div>
              <div className={styles.categoryItem}>
                <p className={styles.categoryItemText}>IDE</p>
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" />
              </div>
              <div className={styles.categoryItem}>
                <p className={styles.categoryItemText}>Browser</p>
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" />
              </div>
              <div className={styles.categoryItem}>
                <p className={styles.categoryItemText}>Writing</p>
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Docs_2020_Logo.svg" />
              </div>
              <div className={styles.categoryItem}>
                <p className={styles.categoryItemText}>Favorite Games</p>
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/6/65/Osu%21Logo_%282015%29.svg" />
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Dance_Dance_Revolution_dance_pad_icon.png" />
                <img width="64" height="64" src="https://static.wikia.nocookie.net/minecraft/images/6/61/Animage.png" />
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/en/6/6a/Braidlogo.jpg" />
                <img width="64" height="64" src="https://upload.wikimedia.org/wikipedia/en/f/fa/Game_Dev_Tycoon_logo.png" />
                <img width="64" height="64" src="https://static.wikia.nocookie.net/logopedia/images/d/d6/SPORE2005.png" />
              </div>
            </div>
          </div>
          <div className={styles.category}>
            <h2>
              Languages
            </h2>
            <div class={styles.categoryItemListWrapper}>
              <p>Knowledgable</p>
              <div class={styles.categoryItemList}>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg">
                  C# is a convenient language for games because of it's dynamic structure with inheritance and object oriented programming.
                </CategoryItem>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg">
                  Rusts rigorous and sturdy structure and focus on memory safety 
                  makes it a lot less error-prone than other languages 
                  with null reference exception, memory leaking and dangling pointers.
                  It also has a good dependency manager and build tool called cargo which
                  makes it a whole lot simpler to manage than C++.
                </CategoryItem>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg">
                  C is in my opinion, one of the best beginner's languages as it forces them 
                  to learn about memory and lowly abstracted programming.
                </CategoryItem>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg">
                  C++ is a very wide language with many different structures and designs. 
                  It's fast and also has more abstraction and features than what C has such as generics, classes and much more.
                  Mostly dropped this in favor of Rust.
                </CategoryItem>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg">
                  Javascript is great at being *really* dynamic.
                  While extremely error-prone you don't have to worry about properly structuring things
                  so it makes it easy to make a quick and dirty program.
                  It's also required for web dev so there's that.
                </CategoryItem>
              </div>
            </div>
            <div class={styles.categoryItemListWrapper}>
              <p>Can use</p>
              <div class={styles.categoryItemList}>
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" />
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" />
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" />
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
                <CategoryItem src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" />
              </div>
            </div>
          </div>
      </main>
    </>
  )
}
