// Windows 파일 경로 유효성 검사
export function validatePathOnWindows(s: string) {
  // 맨 앞에 'A:\' 드라이브가 있고 그 이후에 /:*?"<>| 문자가 있으면 안된다
  const regex = /[a-zA-Z]:((?![/:*?"<>|])(?!\\{2,}).)*$/

  return regex.test(s)
}

