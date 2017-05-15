
# coding: utf-8

# In[43]:

import markdown, re, os, yaml
from jsmin import jsmin
from csscompressor import compress


# In[44]:

# read markdown article
with open('article.md', encoding='utf-8') as text:
    parts = text.read().split('---')
    header = parts[0]
    main = parts[1]


# In[45]:

art = yaml.load(header)


# In[46]:

#names of authors
tmp = ', '.join(art['authors'])
art['authors'] = ' a '.join(tmp.rsplit(', ', 1))


# In[47]:

# format external JS links
tmp = ''
for lib in art['libraries']:
    tmp += '<script src="{0}"></script>\n'.format(lib)
art['libraries'] = tmp


# In[48]:

# format external CSS links 
tmp = ''
for style in art['styles']:
    tmp += '<link rel="stylesheet" type="text/css" href="{0}">\n'.format(style)
art['styles'] = tmp


# In[49]:

# article content
art['content'] = markdown.markdown(main)


# In[50]:

#read snowfall template
with open('./templates/snowfall.html', encoding='utf-8') as t:
    template = t.read()


# In[51]:

#read options
options = art['options'].split(", ")


# In[58]:

#option: wide
if "wide" in options: art['column'] = "<div class=\"row-main row-main--article\">"
else: art['column'] = "<div class=\"row-main row-main--narrow\">"


# In[14]:

# fill template
for variable in re.findall(r"\{(\w+)\}", template):
    template = template.replace('{' + variable + '}', str(art[variable]))


# In[28]:

# pack JSscripts
temp = ''
for script in os.listdir('./js/'):
    with open('./js/' + script, encoding='utf-8') as js_file:
        jmin = jsmin(js_file.read())
        temp += jmin

template = template + '<script>' + temp + '</script>\n' 


# In[29]:

# pack styles
temp = ''
for style in os.listdir('./styles/'):
    with open('./styles/' + style, encoding='utf-8') as css_file:
        csmin = compress(css_file.read())
        temp += csmin

template = '<style>' + temp + '</style>\n' + template


# In[30]:

#write template
with open('./article.html', 'w', encoding='utf-8') as f:
    f.write(template)


# In[31]:

# write wrapped content into dummy index
with open('./templates/wrapper.html', encoding='utf-8') as t:
    wrapper = t.read()
    
wrapper = wrapper.replace('{content}', template)

with open('./index.html', 'w', encoding='utf-8') as f:
    f.write(wrapper)


# In[ ]:


