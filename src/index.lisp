(html :lang 'en
  (head
    (meta :charset 'utf-8)
    (link :rel 'stylesheet :href "style.css")
    
    (script :src "runtime.js"   :defer ')
    (script :src "hyperlisp.js" :defer ')
    
    (title "HyperLisp demo"))
  
  (body
    (div :class "pane"
      (input :type 'checkbox :id "fast-updates")
        (label :for "fast-updates" "Fast updates")
      (div :id "top-pane" 
        (textarea :spellcheck 'false :id "input"
          "(html :lang 'en\n"
          "  (head\n"
          "    (meta :charset 'utf-8)\n"
          "    (title \"Example page\"))\n"
          "  \n"
          "  (body\n"
          "    (h1 \"Example HyperLisp page\")))"))
      (div :id "bottom-pane" 
        (pre :id "error")))
    
    (div :class "pane" 
      (iframe :id "output"))))
