# Kyle Keller Portfolio

Kyle Keller의 정적 포트폴리오 사이트입니다. `main` 브랜치에 변경 사항이 올라오면 GitHub Actions가 사이트를 빌드하고 GitHub Pages에 자동 배포합니다.

## GitHub에 올리기

1. GitHub에서 빈 저장소를 만듭니다. 저장소 이름은 무엇이든 사용할 수 있습니다.
2. 저장소의 **Settings → Pages → Build and deployment → Source**를 `GitHub Actions`로 선택합니다. GitHub 보안 정책상 새 저장소에서 이 설정만은 저장소 관리자가 한 번 직접 해야 합니다.
3. 이 폴더의 전체 내용을 저장소의 `main` 브랜치에 push합니다.
4. 저장소의 **Actions** 탭에서 `Deploy portfolio to GitHub Pages` 작업이 완료될 때까지 기다립니다.
5. 완료된 작업의 `deploy` 단계 또는 저장소의 **Settings → Pages**에서 공개 주소를 확인합니다.

그 뒤부터는 `main` 브랜치에 push할 때마다 자동으로 다시 배포됩니다.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm ci
npm run dev
```

프로덕션 결과 검증:

```bash
npm test
```

정적 결과물은 `out/`에 생성됩니다. 프로젝트 저장소 Pages의 `/<repository-name>/` 경로와 사용자/조직 Pages의 루트 경로를 모두 자동으로 처리합니다.
