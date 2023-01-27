export const saEvent = (eventName: string, metadata?: any) => {
  if (window && window.sa_event && metadata)
    return window.sa_event(eventName, metadata)
  else if (window && window.sa_event) return window.sa_event(eventName)
}
