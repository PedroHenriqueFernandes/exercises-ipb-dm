import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Post } from '../../components/Post';
import { api } from '../../lib/axios';

interface PostProps {
  id: string;
  userId: string;  
  title: string;
  body: string;
}

export function Home(){
    const [posts, setPosts] = useState([] as PostProps[]);

    useEffect(() => {
      api.get<PostProps[]>('/posts')
        .then(response => {
          setPosts(response.data)
        })
    }, [])

    return(
        <View>
            {
                posts.length > 0 ?
                <FlatList 
                    data={posts}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <Post 
                            id={item.id} 
                            userId={item.userId} 
                            key={item.id} 
                            title={item.title} 
                            body={item.body} 
                        />
                    }
                />
                : <Text>Nenhum post encontrado</Text>
            }
        </View>
    )
}