# The movie

<div align="center">
  <img src="https://github.com/zerosubin/themoive/assets/78471546/bab53574-0d65-495a-8636-f2c041c618b7" />

  <br/>
  <b>📌 제로베이스 개인 프로젝트 (개발기간 : 2023.06)</b>
</div>

## 프로젝트 소개

**다소 어려운 영화 평론보다 쉬운 평론을 나누는 영화 커뮤니티**

드라마보다 영화를 좋아하는 사람이라면 영화 후기에 대해 나누는 걸 멈출 수 없어요. 마음 놓고 편하게 후기를 나눠보고 싶었습니다. The movie에서는 어제자 일간 박스오피스를 확인할 수 있고, 어떤 영화를 볼지 못 고르는 사람을 위해 랜덤으로 예고편을 골라 보여주며, 딱딱한 평론이나 후기를 나누는 대신에 가볍고 큰 부담없이 평론을 나눌 수 있는 사이트입니다.

## 배포 주소

⛓️ https://themoive.vercel.app/

## 🔥 Stacks

**Environment**

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

**Confing**

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

**Development**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

**Database**

<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">

**deploy**

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 💻 화면 구성

| 메인페이지(로그인 X)                                                                                                                                                                                                                                                                                                                | 메인페이지(로그인 O)                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![메인페이지(로그인x)](https://github.com/zerosubin/themoive/assets/78471546/29c4e4bd-5c20-4a2a-8fa2-5b8e0c1b0223) 로그인을 하지 않았을때는 페이지 헤더에 로그인버튼이 뜹니다. 왼쪽에는 하루 전의 일간 박스오피스이고, 해당 제목을 누르면 영화 상세 페이지로 이동합니다. 오른쪽에 있는 유튜브 예고편은 랜덤으로 뜨도록 구현했습니다 | ![메인페이지(로그인o)](https://github.com/zerosubin/themoive/assets/78471546/7a6eb719-c6c2-42a9-8958-9647d691dade) 로그인을 했을때는 사람 이모티콘이 생기고 마우스를 hover하면 로그아웃 버튼이 뜹니다.                                                                                    |
| **영화 목록 페이지**                                                                                                                                                                                                                                                                                                                | **영화 검색 페이지**                                                                                                                                                                                                                                                                      |
| ![영화목록페이지](https://github.com/zerosubin/themoive/assets/78471546/32114b8a-87c2-41cb-99d1-7491a007b2cd) 영화 목록 페이지는 영화 포스터와 제목으로 구성되어있고, 포스터를 누르면 해당 영화 상세 페이지로 이어집니다.                                                                                                           | ![영화검색페이지](https://github.com/zerosubin/themoive/assets/78471546/4b1bf575-3cee-4845-b4e2-463fa10ae389) 검색창이 헤더에 있으므로 어느 페이지에 있더라도 검색이 가능합니다. 검색어가 포함된 영화 목록들을 보여주고, 마찬가지로 포스터를 클릭하면 해당 영화 상세 페이지로 넘어갑니다. |
| **영화 상세 페이지**                                                                                                                                                                                                                                                                                                                | **배우 상세 페이지**                                                                                                                                                                                                                                                                      |
| ![영화상세페이지](https://github.com/zerosubin/themoive/assets/78471546/fa53d3a0-e21e-4130-8001-dd89048e7d97) 일간 박스오피스나 영화 목록을 통해 접속하면 뜨는 페이지입니다. 영화 포스터와 개봉일, 감독, 출연진 등 정보가 보이고, 출연진의 이름을 누르면 해당 배우의 상세 페이지로 넘어갑니다.                                      | ![배우상세페이지](https://github.com/zerosubin/themoive/assets/78471546/4f1bd2dc-6c0f-4f6b-becd-214a1cabe895) 출연진의 목록에서 누르면 넘어오는 사이트입니다. 배우의 상세 정보가 있습니다.                                                                                                |
| **평론 게시판 페이지**                                                                                                                                                                                                                                                                                                              | **글 작성 페이지**                                                                                                                                                                                                                                                                        |
| ![평론게시판페이지](https://github.com/zerosubin/themoive/assets/78471546/fbb03bb4-8dcb-49bc-a135-ad3cc0864e70) 사람들이 나누는 평론을 게시판 형식으로 구현했고, 로그인을 한 사람만 글 작성이 가능합니다.                                                                                                                           | ![글 작성 페이지](https://github.com/zerosubin/themoive/assets/78471546/377c88bd-0eee-4085-a873-c744852e6bf6) 로그인한 사람들은 제목과 글을 작성할 수 있습니다.                                                                                                                           |
| **글 상세 페이지(본인 글이 아닐때)**                                                                                                                                                                                                                                                                                                | **글 상세 페이지(본인 글 일때)**                                                                                                                                                                                                                                                          |
| ![글 상세 페이지(로그인안햇을때)](https://github.com/zerosubin/themoive/assets/78471546/4cc22138-077e-4568-92cf-b26b53d8b8c1) 본인의 글이 아니면 글을 수정하거나 삭제할 수 없고, 또한 본인의 댓글이 아니면 수정하거나 삭제 할 수 없습니다.                                                                                          | ![글 상세 페이지(로그인햇을때)](https://github.com/zerosubin/themoive/assets/78471546/467c82b0-eaf3-4496-bba9-1bddef0520f7) 만약 본인의 글이면 글을 수정하거나 삭제할 수 있고, 본인의 댓글 또한 수정하거나 삭제 가능합니다.                                                               |

## ✅ 주요 기능

📌 **일간 박스 오피스 기능**

- 영화진흥위원회API로 어제자 일간 박스오피스 확인 가능

📌 **오늘의 예고편 기능**

- 영화를 고르기 어려워하는 사람을 위해 랜덤으로 예고편 재생

📌 **다양한 영화 목록 제공**

- react-intersection-observer를 이용하여 무한스크롤 기능 구현, 나라 구별 없이 존재하는 모든 영화 목록 확인 가능
- **검색창**을 이용해 원하는 영화 검색 가능

📌 **로그인한 사람에게만 글, 댓글 권한 부여**

- react-quill를 이용하여 react text editor 구현

📌 **데스크탑, 태블릿, 모바일에서의 반응형 디자인 제공**

- react-responsive를 이용하여 media-query 구현

## 🗂️ 디렉토리 구조

![image](https://github.com/zerosubin/themoive/assets/78471546/01135f10-ace0-4c2c-8800-e4c8b39bd536)
