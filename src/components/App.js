import {Post} from './posts/Post.component'
import {faker} from '@faker-js/faker'
import './App.css';

const App = (props) => {

    const getRandomPostTime = ()=>{
        return (Math.floor(Math.random() * 10) + 1) + 'h';
    }

    const userName = faker.internet.userName()
    return (
        <>
            <Post username={userName} avatar={faker.image.avatar()} postImage={faker.image.abstract()}
                  caption={faker.lorem.words(10)} time="10h ago"
                  comments={[
                      {
                          username : faker.internet.userName(),
                          avatar : faker.internet.avatar(),
                          time : getRandomPostTime(),
                          comment : faker.lorem.words(10),
                          isLike : faker.datatype.boolean(),
                      },
                      {
                          username : faker.internet.userName(),
                          avatar : faker.internet.avatar(),
                          time : getRandomPostTime(),
                          comment : faker.lorem.words(10),
                          isLike : faker.datatype.boolean(),
                      },
                      {
                          username : faker.internet.userName(),
                          avatar : faker.internet.avatar(),
                          time : getRandomPostTime(),
                          comment : faker.lorem.words(10),
                          isLike : faker.datatype.boolean(),
                      }
                      ]}
            />
        </>
    );
}

export {App};