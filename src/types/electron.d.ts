interface Window {
  electronAPI: {
    ipcRenderer?: {
      onUpdateAvailable: (callback: (info: any) => void) => () => void
      onUpdateDownloaded: (callback: (info: any) => void) => () => void
      on: (channel: string, func: (...args: any[]) => void) => void
      removeListener: (channel: string, func: (...args: any[]) => void) => void
    }
    onOutOfCredits: (callback: () => void) => () => void
    openSubscriptionPortal: (authData: {
      id: string
      email: string
    }) => Promise<{ success: boolean; error?: string }>
    updateContentDimensions: (dimensions: {
      width: number
      height: number
    }) => Promise<void>
    clearStore: () => Promise<{ success: boolean; error?: string }>
    getScreenshots: () => Promise<{ path: string; preview: string }[]>
    deleteScreenshot: (
      path: string
    ) => Promise<{ success: boolean; error?: string }>
    onScreenshotTaken: (
      callback: (data: { path: string; preview: string }) => void
    ) => () => void
    onSolutionsReady: (callback: (solutions: string) => void) => () => void
    onResetView: (callback: () => void) => () => void
    onSolutionStart: (callback: () => void) => () => void
    onDebugStart: (callback: () => void) => () => void
    onDebugSuccess: (callback: (data: any) => void) => () => void
    onSolutionError: (callback: (error: string) => void) => () => void
    onProcessingNoScreenshots: (callback: () => void) => () => void
    onProblemExtracted: (callback: (data: any) => void) => () => void
    openSettingsPortal: () => Promise<void>
    onSolutionSuccess: (callback: (data: any) => void) => () => void
    onUnauthorized: (callback: () => void) => () => void
    onDebugError: (callback: (error: string) => void) => () => void
    onSubscriptionUpdated: (callback: () => void) => () => void
    onSubscriptionPortalClosed: (callback: () => void) => () => void
    onOutOfCredits: (callback: () => void) => () => void
    onReset: (callback: () => void) => () => void
    takeScreenshot: () => Promise<void>
    moveWindowLeft: () => Promise<void>
    moveWindowRight: () => Promise<void>
    openExternal: (url: string) => void
    toggleMainWindow: () => Promise<{ success: boolean; error?: string }>
    triggerScreenshot: () => Promise<{ success: boolean; error?: string }>
    triggerProcessScreenshots: () => Promise<{
      success: boolean
      error?: string
    }>
    triggerReset: () => Promise<{ success: boolean; error?: string }>
    triggerMoveLeft: () => Promise<{ success: boolean; error?: string }>
    triggerMoveRight: () => Promise<{ success: boolean; error?: string }>
    triggerMoveUp: () => Promise<{ success: boolean; error?: string }>
    triggerMoveDown: () => Promise<{ success: boolean; error?: string }>
  }
}
