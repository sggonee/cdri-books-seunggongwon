import Book from '@/components/layout/Search/Book';
import { useState } from 'react';
import styles from './Books.module.css';

const mock = {
  title: 'title',
  publisher: 'publisher',
  description: `“나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.”

하루키 월드의 빛나는 다이아몬드
무라카미 하루키를 만나기 위해 가장 먼저 읽어야 할 책!

페이지를 처음 펼치는 오늘의 젊음들에게, 그리고 오랜 기억 속에 책의 한 구절을 간직하고 있는 어제의 젊음들에게, 한결같은 울림으로 예민하고 섬세한 청춘의 감성을 전하며 영원한 필독서로 사랑받고 있는 무라카미 하루키의 대표작 『노르웨이의 숲』. 1989년 『상실의 시대』라는 제명으로 처음 출간된 이래 우리 출판 사상 최장기 베스트셀러를 기록하며 하나의 사건으로 남은 소설, 『노르웨이의 숲』이 민음사 세계문학전집에 이어 단행본으로 출간되었다.`,
  price: 10000,
  salePrice: 1000,
  thumbnail: 'https://placehold.co/480x680/jpg',
  status: 'status',
};

const Books = () => {
  const [openDetail, setOpenDetail] = useState(-1);
  return (
    <div className={styles.container}>
      {[mock, mock, mock, mock].map((item, i) => (
        <Book
          key={i}
          index={i}
          item={item}
          isOpenDetail={openDetail === i}
          onOpenDetail={(index: number) => setOpenDetail(index)}
        />
      ))}
    </div>
  );
};

export default Books;
