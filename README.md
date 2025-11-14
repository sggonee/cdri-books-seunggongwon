# 도서 검색

- 프로젝트 개요
  - Vite(+7), React(+19), Typescript, module css, @tanstack/react-query 기반으로 도서 검색 어플리케이션을 구성합니다.
  - 구현 범위
    - [x] 도서 목록
    - [x] 내가 찜한 목록
    - [x] 검색
    - [x] 상세 검색 필터
    - [x] total count
    - [x] 검색 히스토리
    - [x] Not found
    - [x] 무한 스크롤 (+10)
    - [x] 찜하기
    - [x] 네비게이션

  |도서 검색|도서 목록|도서 상세|상세 필터|내가 찜한 책|검색 히스토리|
  |-|-|-|-|-|-|
  |<img width="1038" height="514" alt="image" src="https://github.com/user-attachments/assets/f6068609-626c-4347-a93e-99d007d7b2d8" />|<img width="969" height="432" alt="image" src="https://github.com/user-attachments/assets/34280f75-669a-4590-bdef-c746337ec253" />|<img width="949" height="368" alt="image" src="https://github.com/user-attachments/assets/04f65bb5-ecb9-41db-a208-1df5828c6ce5" />|<img width="495" height="266" alt="image" src="https://github.com/user-attachments/assets/0cbeeb7a-20a6-4b12-82c8-8332722da12c" />|<img width="1019" height="393" alt="image" src="https://github.com/user-attachments/assets/9380d571-784e-4db7-8fa2-5a6b7789f682" />|<img width="754" height="302" alt="image" src="https://github.com/user-attachments/assets/ca0bc4e3-0df6-478f-ae87-b077be75c71d" />|



- 실행 방법 및 환경 설정
  - `npm run preview` 를 실행하면 자동 설치화 함께 `localhost:8080` 로 자동 오픈 됩니다.
- 폴더 구조 및 주요 코드 설명
  - 폴더 구조
    - `/asset`
      - 정적 파일들을 구성합니다.
    - `/components`
      - Atomic design 패턴을 이용하여 다음과 같이 구성합니다.
        - Atom: `/elements` -> 최소 컴포넌트 단위를 구성하고, 상태를 가지지 않습니다.
        - Molecule: `/modules` -> Atom 을 확장하고 상태를 가지는 단위입니다.
        - Organism: `/sections` -> Atom, Molecule 기반으로 기능 단위 UI를 구성합니다. 그리고 도메인에 종속되는 단위입니다.
        - Template: `/views` -> 최종 결과물 반영을 위한 컴포넌트만을 구성합니다.
    - `/constant`
      - 변하지 않는 상수들을 정의합니다.
    - `/controller`
      - api, type, react-query 패턴을 정의합니다.
    - `/css`
      - 글로벌 css 를 정의합니다.
    - `/pages`
      - 도메인에 노출되는 파일을 정의합니다.
    - `/routes`
      - 기본적인 경로를 설정합니다.
    - `/utils`
      - 재사용되는 기능 함수들을 정의합니다.
- 라이브러리 선택 이유
  - className 을 관리하는 `clsx` 외에 부가적인 라이브러리는 설치하지 않았습니다.
  - `store` 가 필요하지 않은 구조였습니다.
- 강조 하고 싶은 기능
  - 재사용 관점으로 컴포넌트 아키텍처를 고민했습니다.
  - icon 을 하나로 관리하는 컴포넌트를 고민했고, vite 의 [Glob Import](https://ko.vite.dev/guide/features.html#glob-import) 를 이용하여 컴포넌트를 구성했습니다. ([icons](https://github.com/sggonee/cdri-books-seunggongwon/blob/main/src/components/elements/Icon.tsx))
  - 성능 최적화
    - Suspense 를 조합하여, 청크 단위로 파일을 호출합니다.
        <img width="957" height="181" alt="image" src="https://github.com/user-attachments/assets/75563417-e4ab-4c10-948f-70bb3d123a6e" />
    - memoization 을 이용하여 불필요한 렌더링 최소화
        <img width="836" height="219" alt="image" src="https://github.com/user-attachments/assets/b6ab4c69-d638-48a7-83c8-449dccd64398" />    
        |before|after|
        |-|-|
        |![before_memoization](https://github.com/user-attachments/assets/f6b4ae36-4d24-400b-b1e1-fc1e6e6e5c68)|![after_memoization](https://github.com/user-attachments/assets/6a5f098e-294f-46f7-bf1d-49ec873fbb6f)|

- 구현 못한 범위
   - 찜하기 무한스크롤
     - 개별 아이템 단위로 찜하기를 불러오고 있어 페이지네이션이 미지원 되고 있습니다. 별도의 기능으로 구현을 고려했으나 프로젝트 정리하는데 집중했습니다. 🙇‍♂️
