<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-input-container {
        /* display: inline-block;
        margin: 0 10px 20px 0; */
    }
  }
</style>

# CustomInput 输入框

---

### 基础用法

<div class="demo-block">
    <div>
        <custom-input v-model="inputValue"></custom-input>
    </div>
</div>

::: demo

```html
<div>
    <custom-input v-model="inputValue" placeholder="请输入内容"></custom-input>

    <script>
        export default {
            data() {
                return {
                    inputValue: ''
                }
            }
        }
    </script>
</div>

```
:::

<script>
    export default {
        data() {
            return {
                inputValue: ''
            };
        }   
    }
</script>