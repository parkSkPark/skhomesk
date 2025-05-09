0. 문서 목적

이 문서는 "하몬서클 스토리텔링 기반 창업·직장·인생 성공 유튜브" 프로젝트의 랜딩 페이지(홈페이지 1차 MVP) 구현을 위한 기능‧디자인 명세를 요약한다. 코드 구현은 추후 GPT 대화를 통해 단계별로 작성하며, 이 문서는 비개발 팀도 이해할 수 있는 한글 서술형으로 작성하였다.

1. 프로젝트 개요

사이트명(가칭): "하몬서클 성공스토리"

목표: 유튜브 콘텐츠(하몬서클 기반 스토리텔링)의 세계관‧가치를 소개하고 구독 전환을 유도한다.

개발 스택: HTML5, CSS3, Bootstrap 5.3 기준. 추후 JS·PHP 확장 대비 구조 설계.

2. 핵심 사용자 페르소나

구분

특징

최우선 니즈

예비 창업자

20‒35세, 스타트업에 관심

실전적 인사이트, 성공 스토리

직장 경력 3‒10년 차

커리어 전환 고민

동기부여, 멘토링 스토리

자기계발 러버

콘텐츠 소비형

감성적 서사, 지속적 동기부여

3. 정보 구조 & 섹션 플로우

헤더/내비게이션

로고(텍스트 로고 1차) / 상단 고정 내비

메뉴: About｜Story Circle｜Episodes｜Blog｜Contact

히어로(첫 화면)

배경 비주얼: 성공 여정을 연상시키는 컬러 그라디언트 또는 사진

헤드카피: "당신의 창업·직장·인생, 하몬서클로 성공을 설계하다"

서브카피 & 첫 CTA 버튼("유튜브 구독")

Value Proposition 섹션

3열 아이콘 + 문구: 창업 인사이트 / 커리어 성장 / 인생 서사

하몬서클 소개 섹션

8단계 스토리 구조 인포그래픽(정적 이미지 1차)

각 단계 요약 설명, "자세히 보기" 링크

에피소드 프리뷰 섹션

Latest 3편 카드(썸네일, 제목, 1줄 요약, "Watch")

저널/블로그 섹션

카드 2‒3개: 제작 후기, 비하인드 스토리

구독 & 소셜 프루프 섹션

구독자 수, 후기 슬라이더(후기 3건 placeholder)

두 번째 CTA 버튼("무료 가이드북 받기")

Contact / Footer

문의 폼(이름, 이메일, 메시지)

SNS 아이콘(YouTube, Instagram, LinkedIn)

저작권 및 개인정보 처리방침 링크

4. 기능 명세(섹션별)

ID

기능 명

설명

상세 요구조건

F-01

헤더 고정

스크롤 시 상단 고정(navbar fixed-top)

메뉴 클릭 시 각 섹션 부드러운 스크롤

F-02

반응형 내비

모바일 드롭다운

햄버거 버튼/접기 기능 Bootstrap 기본 활용

F-03

첫 CTA

"유튜브 구독" 버튼

링크 외부 새 탭, hover 효과

F-04

Value 카드

3개 카드 동일 높이

Bootstrap 카드 컴포넌트 사용 + 아이콘(placeholder)

F-05

인포그래픽 모달

8단계 이미지 클릭→ 설명 모달

Bootstrap modal 활용, JS 불필요 1차

F-06

에피소드 그리드

최신 3편 동적 업데이트 대비

thumbnail = img/ep#.jpg placeholder

F-07

블로그 카드

2‒3개, read more 링크

추후 PHP/MD 변환 고려해 slug 구조 설계

F-08

후기 슬라이더

carousel

Bootstrap carousel, 자동·수동 전환

F-09

Contact 폼

폼 검증(HTML5)

이름·이메일 필수, 메시지 500자 제한

F-10

접근성 ARIA

nav, buttons, carousel에 ARIA label 지정

WCAG 2.1 AA 기준 최소 충족

5. UI·UX 가이드

컬러 팔레트(예시): 메인 #0052cc(신뢰), 액센트 #ff8b00(도전), 배경 #f7f9fc

타이포그래피: Pretendard / Noto Sans KR, h1 48px→h6 14px scale·rem

버튼 스타일: 둥근 모서리 8px, 그림자 depth-1

이미지 비율: 히어로 16:9, 카드 4:3

6. 반응형 및 호환성

프레임워크: Bootstrap Grid (Col, Row) + Flex utilities

Breakpoints: LG 992+, MD 768‒991, SM 576‒767, XS <576

모바일 히어로: 텍스트 중앙정렬, 버튼 스택

지원 브라우저: Chrome, Edge, Safari, Firefox 최신, Android Chrome ≥ 99, iOS Safari ≥ 14

7. SEO & 메타데이터

title 60자 이내, meta description 160자 이내

opengraph: og:image(1200×630), og:type="website", og:locale="ko_KR"

schema.org "Organization" JSON-LD 스니펫 placeholder

8. 성능 & 접근성 체크리스트

Lighthouse 성능 90점 이상 목표

이미지 lazy loading, WebP 우선

폰트 preload, minified CSS

대체 텍스트 ALT, 키보드 내비 초점 표시

9. 배포 및 유지보수

레포지토리: GitHub public→Pages 배포 (main branch)

CI: GitHub Actions → HTML/CSS lint

버전명명: v0.1 랜딩 페이지 MVP → v0.2 댓글 기능 추가(예)

10. 일정(1단계 상세)

주차

작업

산출물

1주차

정보 구조 확정, UI Wireframe

Figma 링크, site‑map

2주차

콘텐츠 초안 작성, 히어로 시안

카피 초안 docx, 이미지 moodboard

3주차

정적 페이지 코딩, 반응형 확인

index.html, style.css, /img

4주차

QA, 접근성/성능 테스트

Lighthouse 리포트, 수정 목록

5주차

베타 론칭, 피드백

구글폼 피드백, v0.1 릴리스

11. 차후 확장 고려사항

Ep/Blog 자동 목록화 → Jekyll/PHP 마이그레이션

회원 구독(뉴스레터) 기능 → Mailchimp API

GA4 & Tag Manager 연동

끝.

이 명세서는 코드가 아닌 한국어 서술형 가이드로 작성되었으며, 이후 GPT에게 각 기능별 HTML·CSS·Bootstrap 예시 코드를 요청하여 단계적으로 구현할 수 있도록 설계되었습니다.